import NewDashboard from "@/components/new-dashboard/Dashboard";
import LatestBlogs from "./components/latestBlogs/LatestBlogs";
import LatestProjects from "./components/latestProjects/LatestProjects";
import Main from "./components/main/Main";
import ShortAboutMe from "./components/short-about-me/ShortAboutMe";

export default function Home() {
  return (
    <>
      <Main />
      <LatestProjects />
      <LatestBlogs />
      <ShortAboutMe />
    </>
  );
}
