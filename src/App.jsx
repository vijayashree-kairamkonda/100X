import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import { CreateAccountProvider } from "./context/createAccount/CreateAccountProvider";
import { HomeFeed } from "./pages/HomeFeed/HomeFeed";
import { Profile } from "./pages/Profile/Profile";
import { HomeFeedProvider } from "./context/homeFeed/HomeFeedProvider";
import { EditProfile } from "./components/Profile/EditProfile";
import { TweetProvider } from "./context/Tweet/TweetProvider";
import { CreatePost } from "./components/shared/CreatePost";
import { ErrorPage } from "./components/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomeFeed />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/create-post",
    element: <CreatePost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/create-post",
    element: <CreatePost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/edit-profile",
    element: <EditProfile />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="h-screen overflow-auto w-screen bg-neutral-1000 font-inter text-neutral-50">
      <CreateAccountProvider>
        <HomeFeedProvider>
          <TweetProvider>
            <RouterProvider router={router} />
          </TweetProvider>
        </HomeFeedProvider>
      </CreateAccountProvider>
    </div>
  );
}

export default App;
