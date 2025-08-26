import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // assuming this is your login view
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import ExerciseGuide from '@/views/ExerciseGuide.vue'
import EditProfile from '@/views/EditProfile.vue'
import SpeechPractice from '@/views/SpeechPractice.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView }, // default to login
  { path: '/login', name: 'Login', component: LoginView }, // explicitly add this line
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
  { path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/exerciseguide', name: 'ExerciseGuide', component: ExerciseGuide },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
  { path: '/speechpractice', name: 'SpeechPractice', component: SpeechPractice },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
