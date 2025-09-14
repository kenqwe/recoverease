import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/Auth/RegisterView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import DashboardView from '@/views/Survivor/DashboardView.vue'
import ForgotPassword from '@/views/Auth/ForgotPassword.vue'
import ExerciseGuide from '@/views/Survivor/ExerciseGuide.vue'
import SpeechPractice from '@/views/Survivor/SpeechPractice.vue'
import SpeechPracticeEasy from '@/views/Survivor/SpeechPracticeEasy.vue'
import SpeechPracticeMedium from '@/views/Survivor/SpeechPracticeMedium.vue'
import SpeechPracticeHard from '@/views/Survivor/SpeechPracticeHard.vue'
import MedicationView from '@/views/Survivor/MedicationView.vue'
import AddMedication from '@/views/Survivor/AddMedication.vue'
import ConnectCaregiver from '@/views/Survivor/ConnectCaregiver.vue'
import AddCaregiver from '@/views/Survivor/AddCaregiver.vue'
import ExerciseList from '@/views/Survivor/ExerciseList.vue'
import CaregiverDashboard from '@/views/Caregiver/CaregiverDashboard.vue'
import EmergencyLog from '@/views/Caregiver/EmergencyLog.vue'
import EditProfileCaregiver from '@/views/Caregiver/EditProfileCaregiver.vue'
import EditProfileSurvivor from '@/views/Survivor/EditProfileSurvivor.vue'
import CaregiverExerciseList from '@/views/Caregiver/CaregiverExerciseList.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView }, // landing page is LoginView
  { path: '/login', name: 'LoginExplicit', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
  { path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/exerciseguide', name: 'ExerciseGuide', component: ExerciseGuide },
  { path: '/editprofilesurvivor', name: 'EditProfileSurvivor', component: EditProfileSurvivor },
  { path: '/editprofilecaregiver', name: 'EditProfileCaregiver', component: EditProfileCaregiver },
  { path: '/speechpractice', name: 'SpeechPractice', component: SpeechPractice },
  { path: '/speechpracticeeasy', name: 'SpeechPracticeEasy', component: SpeechPracticeEasy },
  { path: '/speechpracticemedium', name: 'SpeechPracticeMedium', component: SpeechPracticeMedium },
  { path: '/speechpracticehard', name: 'SpeechPracticeHard', component: SpeechPracticeHard },
  { path: '/medication', name: 'Medication', component: MedicationView },
  { path: '/addmedication', name: 'AddMedication', component: AddMedication },
  { path: '/connectcaregiver', name: 'ConnectCaregiver', component: ConnectCaregiver },
  { path: '/addcaregiver', name: 'AddCaregiver', component: AddCaregiver },
  { path: '/exerciselist', name: 'ExerciseList', component: ExerciseList },
  {
    path: '/caregiverexerciselist',
    name: 'CaregiverExerciseList',
    component: CaregiverExerciseList,
  },
  { path: '/caregiverdashboard', name: 'CaregiverDashboard', component: CaregiverDashboard },
  { path: '/emergencylog', name: 'EmergencyLog', component: EmergencyLog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
