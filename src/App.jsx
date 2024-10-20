import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage'
import Login from './views/Login';
import Signup from './views/Signup';
import CartPage from './views/CartPage';
import ProductPage from './views/ProductPage';
import CategoryPage from './views/CategoryPage';
import MyOrders from './views/MyOrders';
import Notifications from './views/Notifications';
import AccountSettings from './views/AccountSettings';
import BlogPage from './views/BlogPage';
import { RecipesPage } from './views/RecipesPage';
import VideosPage from './views/VideosPage';
import { EbooksPage } from './views/EbooksPage';
import CompetitionDetails from './views/CompetitionDetails';
import CategoryListPage from './views/CategoryListPage';
import RSSRetailPage from './views/RSSRetail';
import RSSWholesalePage from './views/RSSWholesalePage';
import Dashboard from './views/admin/Dashboard';
import Products from './views/admin/Products';
import Categories from './views/admin/Categories';
import Users from './views/admin/Users';
import VideoUpload from './views/admin/VideoUpload';
import Blog from './views/admin/Blog';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/rssretail" element={<RSSRetailPage />} />
        <Route path="/rsswholesale" element={<RSSWholesalePage />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/competition/:id" element={<CompetitionDetails />} />
        <Route exact path="/blog/:blogId" element={<BlogPage/>} />
        <Route exact path="/recipes/:recipesId" element={<RecipesPage/>} />
        <Route exact path="/videos/:videosId" element={<VideosPage/>} />
        <Route exact path="/ebooks/:ebooksId" element={<EbooksPage/>} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/:category" element={<CategoryListPage />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        {/* Admin Route */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/blog" element={<Blog />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/videos" element={<VideoUpload />} />
        {/* <Route path="/admin/recipes" element={<RecipeUpload />} />
        <Route path="/admin/ebooks" element={<EbookUpload />} />
        <Route path="/admin/orders" element={<Orders />} /> */}

      </Routes>
    </Router>
  )
}

export default App
