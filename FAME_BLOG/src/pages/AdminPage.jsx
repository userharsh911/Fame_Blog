import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import articleService from '../services/articles'
import { Query } from 'appwrite'
import authService from '../services/authService'

const AdminPage = () => {
    const user = useSelector(state=>state.user)
    const [response,setResponse] = useState(null)
    useEffect(()=>{
      articleService.getAllPosts([Query.equal("userid",user.$id)])
      .then((response)=>{
        setResponse(response)
      })
    },[])

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  //     <div className="container mx-auto px-4 py-8">
  //       {/* Welcome Header */}
  //       <div className="text-center mb-8">
  //         <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
  //           Welcome back, {user.name}! 👋
  //         </h1>
  //         <p className="text-gray-600 dark:text-gray-300 text-lg">
  //           Ready to manage your platform today?
  //         </p>
  //       </div>

  //       {/* Main Content Grid */}
  //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
  //         {/* Admin Privileges Card */}
  //         <div className="lg:col-span-2">
  //           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
  //             <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
  //               <div className="flex items-center space-x-3">
  //                 <div className="bg-white/20 rounded-full p-3">
  //                   {/* <Shield className="w-8 h-8 text-white" /> */}
  //                 </div>
  //                 <div>
  //                   <h2 className="text-2xl font-bold text-white">Admin Access Granted</h2>
  //                   <p className="text-green-100">You have full administrative privileges</p>
  //                 </div>
  //               </div>
  //             </div>
              
  //             <div className="p-6">
  //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //                 <div className="space-y-4">
  //                   <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
  //                     {/* <Hash className="w-5 h-5 text-blue-500" /> */}
  //                     <div>
  //                       <p className="text-sm text-gray-500 dark:text-gray-400">User ID</p>
  //                       <p className="font-semibold text-gray-900 dark:text-white">{user.$id}</p>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
  //                     {/* <Mail className="w-5 h-5 text-green-500" /> */}
  //                     <div>
  //                       <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
  //                       <p className="font-semibold text-gray-900 dark:text-white">{user.email}</p>
  //                     </div>
  //                   </div>
  //                 </div>
                  
  //                 <div className="space-y-4">
  //                   <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
  //                     {/* <User className="w-5 h-5 text-purple-500" /> */}
  //                     <div>
  //                       <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
  //                       <p className="font-semibold text-gray-900 dark:text-white">{user.role}</p>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-700">
  //                     {/* <Shield className="w-5 h-5 text-blue-600" /> */}
  //                     <div>
  //                       <p className="text-sm text-blue-600 dark:text-blue-400">Access Level</p>
  //                       <p className="font-bold text-blue-700 dark:text-blue-300">Full Access</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Quick Actions Panel */}
  //         <div className="space-y-6">
  //           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
  //             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
  //               {/* <Settings className="w-6 h-6 mr-2 text-indigo-500" /> */}
  //               Quick Actions
  //             </h3>
              
  //             <div className="space-y-3">
  //               <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors duration-200">
  //                 {/* <Users className="w-5 h-5 text-blue-500" /> */}
  //                 <span className="text-blue-700 dark:text-blue-300 font-medium">Manage Users</span>
  //               </button>
                
  //               <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-xl transition-colors duration-200">
  //                 {/* <BarChart3 className="w-5 h-5 text-purple-500" /> */}
  //                 <span className="text-purple-700 dark:text-purple-300 font-medium">View Analytics</span>
  //               </button>
                
  //               <button className="w-full flex items-center space-x-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-xl transition-colors duration-200">
  //                 {/* <Settings className="w-5 h-5 text-emerald-500" /> */}
  //                 <span className="text-emerald-700 dark:text-emerald-300 font-medium">System Settings</span>
  //               </button>
  //             </div>
  //           </div>

  //           {/* Support Card */}
  //           <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border-2 border-orange-200 dark:border-orange-700 p-6">
  //             <div className="flex items-center space-x-3 mb-4">
  //               <div className="bg-orange-100 dark:bg-orange-900/40 rounded-full p-2">
  //                 {/* <HelpCircle className="w-6 h-6 text-orange-600" /> */}
  //               </div>
  //               <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100">Need Help?</h3>
  //             </div>
  //             <p className="text-orange-700 dark:text-orange-200 text-sm mb-4">
  //               Access documentation or contact our support team for assistance.
  //             </p>
  //             <div className="space-y-2">
  //               <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
  //                 View Documentation
  //               </button>
  //               <button className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-orange-600 dark:text-orange-400 font-medium py-2 px-4 rounded-lg border-2 border-orange-200 dark:border-orange-600 transition-colors duration-200">
  //                 Contact Support
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Administrative Tasks Section */}
  //       <div className="mt-12 max-w-4xl mx-auto">
  //         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
  //           <div className="text-center mb-6">
  //             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
  //               Administrative Capabilities
  //             </h3>
  //             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
  //           </div>
            
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
  //             <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
  //               {/* <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" /> */}
  //               <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Management</h4>
  //               <p className="text-gray-600 dark:text-gray-300 text-sm">
  //                 Create, edit, and manage user accounts with comprehensive access control.
  //               </p>
  //             </div>
              
  //             <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
  //               {/* <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-3" /> */}
  //               <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics & Reports</h4>
  //               <p className="text-gray-600 dark:text-gray-300 text-sm">
  //                 Access detailed analytics and generate comprehensive system reports.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

  if(response) return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Hey {user.name}! 🌟
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Welcome to your personal dashboard
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-4">
                    {/* <User className="w-10 h-10 text-white" /> */}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Your Profile</h2>
                    <p className="text-purple-100">Manage your account details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      {/* <Hash className="w-5 h-5 text-blue-500" /> */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">User ID</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{user.$id}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      {/* <Mail className="w-5 h-5 text-green-500" /> */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      {/* <Star className="w-5 h-5 text-yellow-500" /> */}
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Type</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{user.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-700">
                      {/* <Heart className="w-5 h-5 text-green-600" /> */}
                      <div>
                        <p className="text-sm text-green-600 dark:text-green-400">Status</p>
                        <p className="font-bold text-green-700 dark:text-green-300">Active Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                {/* <Activity className="w-6 h-6 mr-2 text-purple-500" /> */}
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-xl transition-colors duration-200">
                  {/* <Settings className="w-5 h-5 text-purple-500" /> */}
                  <span className="text-purple-700 dark:text-purple-300 font-medium">Edit Profile</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors duration-200">
                  {/* <Bell className="w-5 h-5 text-blue-500" /> */}
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Notifications</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-xl transition-colors duration-200">
                  {/* <Bookmark className="w-5 h-5 text-pink-500" /> */}
                  <span className="text-pink-700 dark:text-pink-300 font-medium">Saved Items</span>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-700 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-2">
                  {/* <Trophy className="w-6 h-6 text-blue-600" /> */}
                </div>
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Your Stats</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  {/* <span className="text-blue-700 dark:text-blue-200 text-sm">Profile Views</span>
                  <span className="font-bold text-blue-800 dark:text-blue-100">24</span> */}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 dark:text-blue-200 text-sm">Posts Created</span>
                  <span className="font-bold text-blue-800 dark:text-blue-100">{response.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  {/* <span className="text-blue-700 dark:text-blue-200 text-sm">Likes Received</span>
                  <span className="font-bold text-blue-800 dark:text-blue-100">89</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              What You Can Do
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* <Settings className="w-8 h-8 text-purple-600" /> */}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Customize Profile</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Personalize your profile with photos, bio, and preferences to make it uniquely yours.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* <Activity className="w-8 h-8 text-blue-600" /> */}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Track Activity</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Monitor your engagement, view your activity history, and see your progress over time.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {/* <Heart className="w-8 h-8 text-orange-600" /> */}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Connect & Share</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Connect with friends, share your thoughts, and discover amazing content from the community.
              </p>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Welcome to Your Space! 🎉</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              This is your personal dashboard where you can manage your profile, track your activity, and explore all the amazing features we have to offer. 
              Get started by customizing your profile or exploring the community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                Get Started
              </button>
              <button className="bg-purple-600/20 text-white font-semibold py-3 px-6 rounded-xl border-2 border-white/30 hover:bg-purple-600/30 transition-colors duration-200">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  else{
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-400">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    )
  }
}

export default AdminPage