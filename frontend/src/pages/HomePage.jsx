import { useCallback, useEffect, useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "prabath1998") => {
      setLoading(true);
      try {
        const userRes = await fetch(`https://api.github.com/users/prabath1998`);
        const userProfile = await userRes.json();

        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setRepos(repos);
        setUserProfile(userProfile);

        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  return (
    <div className='m-4'>
    <Search  />
    {repos.length > 0 && <SortRepos  />}
    <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
      {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}

      {!loading && <Repos repos={repos} />}
      {loading && <Spinner />}
    </div>
  </div>
  );
};

export default HomePage;
