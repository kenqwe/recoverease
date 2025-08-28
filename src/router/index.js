import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import ExerciseGuide from '@/views/ExerciseGuide.vue'
import EditProfile from '@/views/EditProfile.vue'
import SpeechPractice from '@/views/SpeechPractice.vue'
import SpeechPracticeEasy from '@/views/SpeechPracticeEasy.vue'
import SpeechPracticeMedium from '@/views/SpeechPracticeMedium.vue'
import SpeechPracticeHard from '@/views/SpeechPracticeHard.vue'
import MedicationView from '@/views/MedicationView.vue'
import AddMedication from '@/views/AddMedication.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView }, // landing page is LoginView
  { path: '/login', name: 'LoginExplicit', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
  { path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/exerciseguide', name: 'ExerciseGuide', component: ExerciseGuide },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
  { path: '/speechpractice', name: 'SpeechPractice', component: SpeechPractice },
  { path: '/speechpracticeeasy', name: 'SpeechPracticeEasy', component: SpeechPracticeEasy },
  { path: '/speechpracticemedium', name: 'SpeechPracticeMedium', component: SpeechPracticeMedium },
  { path: '/speechpracticehard', name: 'SpeechPracticeHard', component: SpeechPracticeHard },
  { path: '/medication', name: 'Medication', component: MedicationView },
  { path: '/addmedication', name: 'AddMedication', component: AddMedication },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
