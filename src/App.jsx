// packages import
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

//services
import { getUser } from './utils/auth';

//components
import { LogIn } from './pages/auth/LogIn/LogIn';
import { Header } from './pages/components/Header';
import { SignUp } from './pages/auth/SignUp/SignUp';
import { Landing } from './pages/Landing/Landing';
import { StoryResultList } from './pages/components/Story/StoryResultList/StoryResultList';
import { AdvancedSearchPage } from './pages/AdvancedSearch/AdvancedSearchPage';
import { StoriesFollowed } from './pages/components/Story/StoriesFollowed/StoriesFollowed';
import { MyStoriesList } from './pages/components/Story/MyStoriesList/MyStoriesList';
import { StoryView } from './pages/components/Story/StoryView/StoryView';
import { ChapterSingleView } from './pages/components/Chapter/ChapterSingleView/ChapterSingleView';
import { CreateStoryView } from './pages/components/Story/CreateStoryView/CreateStoryView';
import { StoryEditView } from './pages/components/Story/StoryEditView/StoryEditView';
import { CreateChapter } from './pages/components/Chapter/CreateChapter/CreateChapter';
//styles
import './assets/global.scss';

const App = () => {
  const [userState, setUser] = useState(getUser());
  const [storiesResultState, setStoriesResult] = useState([]);
  return (<>
    <Header storiesResultState={storiesResultState} setUser={setUser} userState={userState} setStoriesResult={setStoriesResult}></Header>

    <Routes>

      {/* User routes */}
      <Route path="/user/signup" element={<SignUp userState={userState} setUser={setUser} />} />
      <Route path="/user/login" element={<LogIn userState={userState} setUser={setUser} />} />

      {/* Landing */}
      <Route path="/" element={<Landing />} />

      {/* Stories */}
      <Route path="/stories/search" element={<StoryResultList storiesResultState={storiesResultState} />} />
      <Route path="/follows" element={<StoriesFollowed userState={userState} />} />
      <Route path="/myStories" element={<MyStoriesList userState={userState} />} />
      <Route path="/stories/:storyId" element={<StoryView userState={userState} />} />
      <Route path="/stories/:storyId/edit/" element={<StoryEditView userState={userState} />} />
      <Route path="/stories/new" element={<CreateStoryView userState={userState} />} />

      {/* Chapters */}
      <Route path="/chapter/:chapterId" element={<ChapterSingleView userState={userState} />} />
      <Route path="/chapter/new/:storyId" element={<CreateChapter userState={userState} />} />

      {/* Search */}
      <Route path="/advancedsearch" element={<AdvancedSearchPage storiesResultState={storiesResultState} setStoriesResult={setStoriesResult} />} />

    </Routes>
  </>);
};

export default App;
