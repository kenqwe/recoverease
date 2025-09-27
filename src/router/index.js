import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/Auth/RegisterView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import DashboardView from '@/views/Survivor/DashboardView.vue'
import ForgotPassword from '@/views/Auth/ForgotPassword.vue'
import ExerciseGuide from '@/views/Survivor/ExerciseGuide.vue'
import SpeechPractice from '@/views/Survivor/SpeechPractice.vue'
import SpeechPracticeMonitor from '@/views/Caregiver/SpeechPracticeMonitor.vue'
import SpeechPracticeEasy from '@/views/Survivor/SpeechPracticeEasy.vue'
import SpeechPracticeMedium from '@/views/Survivor/SpeechPracticeMedium.vue'
import SpeechPracticeHard from '@/views/Survivor/SpeechPracticeHard.vue'
import MedicationView from '@/views/Survivor/MedicationView.vue'
import CGMedication from '@/views/Caregiver/CGMedication.vue'
import AddMedication from '@/views/Survivor/AddMedication.vue'
import CGAddMedication from '@/views/Caregiver/CGAddMedication.vue'
import ConnectCaregiver from '@/views/Survivor/ConnectCaregiver.vue'
import ConnectSurvivor from '@/views/Caregiver/ConnectSurvivor.vue'
import ConnectSurvivor1 from '@/views/Caregiver/ConnectSurvivor1.vue'
import AddCaregiver from '@/views/Survivor/AddCaregiver.vue'
import ExerciseList from '@/views/Survivor/ExerciseList.vue'
import CaregiverDashboard from '@/views/Caregiver/CaregiverDashboard.vue'
import EmergencyLog from '@/views/Caregiver/EmergencyLog.vue'
import EditProfileCaregiver from '@/views/Caregiver/EditProfileCaregiver.vue'
import EditProfileSurvivor from '@/views/Survivor/EditProfileSurvivor.vue'
import CaregiverExerciseList from '@/views/Caregiver/CaregiverExerciseList.vue'
import AdminDashboard from '@/views/Admin/AdminDashboard.vue'
import EditAffectedParts from '@/views/Caregiver/EditAffectedParts.vue'
import EnterPin from '@/views/Caregiver/EnterPin.vue'
import ScanQr from '@/views/Caregiver/ScanQr.vue'
import SpeechMonitorEasy from '@/views/Caregiver/SpeechMonitorEasy.vue'
import SpeechMonitorMedium from '@/views/Caregiver/SpeechMonitorMedium.vue'
import SpeechMonitorHard from '@/views/Caregiver/SpeechMonitorHard.vue'

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
  { path: '/CGmedication', name: 'CGMedication', component: CGMedication },
  { path: '/addmedication', name: 'AddMedication', component: AddMedication },
  { path: '/CGaddmedication', name: 'CGAddMedication', component: CGAddMedication },
  { path: '/connectcaregiver', name: 'ConnectCaregiver', component: ConnectCaregiver },
  { path: '/connectsurvivor', name: 'ConnectSurvivor', component: ConnectSurvivor },
  { path: '/addcaregiver', name: 'AddCaregiver', component: AddCaregiver },
  { path: '/exerciselist', name: 'ExerciseList', component: ExerciseList },
  {
    path: '/caregiverexerciselist',
    name: 'CaregiverExerciseList',
    component: CaregiverExerciseList,
  },
  { path: '/caregiverdashboard', name: 'CaregiverDashboard', component: CaregiverDashboard },
  { path: '/emergencylog', name: 'EmergencyLog', component: EmergencyLog },
  {
    path: '/speechpracticemonitor',
    name: 'SpeechPracticeMonitor',
    component: SpeechPracticeMonitor,
  },
  { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/editaffectedparts', name: 'EditAffectedParts', component: EditAffectedParts },
  { path: '/connectsurvivor1', name: 'ConnectSurvivor1', component: ConnectSurvivor1 },
  { path: '/enterpin', name: 'EnterPin', component: EnterPin },
  { path: '/scanqr', name: 'ScanQr', component: ScanQr },
  { path: '/speechmonitoreasy', name: 'SpeechMonitorEasy', component: SpeechMonitorEasy },
  { path: '/speechmonitormedium', name: 'SpeechMonitorMedium', component: SpeechMonitorMedium },
  { path: '/speechmonitorhard', name: 'SpeechMonitorHard', component: SpeechMonitorHard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
