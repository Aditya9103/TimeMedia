import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurPatronsPage from './pages/OurPatronsPage';
import ContactUs from './pages/ContactUs';
import FloatingChatMenu from './components/common/FloatingChatMenu';
import ScrollToTop from './components/common/ScrollToTop';
import ServiceDetails from './pages/ServiceDetails';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import AwardsLanding from './pages/AwardsLanding';
import AwardEventPage from './pages/AwardEventPage';

// Admin Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminSignup from './pages/admin/AdminSignup';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import ContactSubmissions from './pages/admin/ContactSubmissions';
import NominationSubmissions from './pages/admin/NominationSubmissions';
import AdminBlogList from './pages/admin/AdminBlogList';
import AdminWriteBlog from './pages/admin/AdminWriteBlog';
import AdminSettings from './pages/admin/AdminSettings';
import AdminAwardCategories from './pages/admin/AdminAwardCategories';
import AdminAwardEvents from './pages/admin/AdminAwardEvents';
import Nomination from './pages/Nomination';


function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!location.pathname.startsWith("/admin") && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-patrons" element={<OurPatronsPage />} />
          <Route path="/services" element={<Navigate to="/services/market-research" replace />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/awards" element={<AwardsLanding />} />
          <Route path="/awards/:categorySlug" element={<AwardsLanding />} />
          <Route path="/awards/:categorySlug/:eventSlug" element={<AwardEventPage />} />
          <Route path="/nomination" element={<Nomination />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          
          {/* Protected Admin Dashboard */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="contact" element={<ContactSubmissions />} />
            <Route path="nominations" element={<NominationSubmissions />} />
            <Route path="award-categories" element={<AdminAwardCategories />} />
            <Route path="award-events" element={<AdminAwardEvents />} />
            <Route path="blogs" element={<AdminBlogList />} />
            <Route path="blogs/new" element={<AdminWriteBlog />} />
            <Route path="blogs/:id/edit" element={<AdminWriteBlog />} />
            <Route path="settings" element={<AdminSettings />} />
            {/* Add more nested admin routes here later */}
          </Route>
        </Routes>
      </main>
      {!location.pathname.startsWith("/admin") && <Footer />}
      {!location.pathname.startsWith("/admin") && <FloatingChatMenu />}
    </div>
  );
}

export default App;
