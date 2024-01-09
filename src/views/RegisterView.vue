<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form @submit="register" class="space-y-10 md:space-y-6" >
                        <div >
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                                <input type="text" v-model="name" id="username"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" v-model="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" v-model="password_confirmation" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div class="flex">
                            <div class="flex items-center me-4">
                                <input id="inline-radio" type="radio" value="2" v-model="role_id" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">User</label>
                            </div>
                            <div class="flex items-center me-4">
                                <input id="inline-2-radio" type="radio" value="1" v-model="role_id" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Create an account</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? 
                            <RouterLink to="/login">
                                <button class="font-medium text-slate-600 hover:underline dark:text-slate-500">Login here</button>
                            </RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <div v-if="loading" class="fixed z-50 flex justify-center items-center inset-0 backdrop-blur-[1px] bg-opacity-75 transition-opacity">
        <div  class="spinners2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { initFlowbite } from 'flowbite';
    export default {
        data() {
            return{
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                role_id: '',
                loading: false
            }
        },
        mounted() {
            initFlowbite();
        },
        methods: {
            async register(e){
                e.preventDefault()
                this.loading = true
                await axios.post("http://3.106.247.189/api/register",{

                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    role_id: this.role_id
                }).then(res => {
                    this.loading = false
                    if(res.data.success){
                        alert("Successfully!")
                        this.$router.push('/login')
                    }else if(res.data.error){
                        // location.reload({ name: "Devices" });
                        alert("This user already register!")
                    }
                })
            }
        }
    }
</script>

<style>
.spinners2 {
   position: relative;
   width: 15.7px;
   height: 15.7px;
}

.spinners2 div {
   animation: spinner-4t3wzl 1.875s infinite backwards;
   background-color: #474bff;
   border-radius: 50%;
   height: 100%;
   position: absolute;
   width: 100%;
}

.spinners2 div:nth-child(1) {
   animation-delay: 0.15s;
   background-color: rgba(71,75,255,0.9);
}

.spinners2 div:nth-child(2) {
   animation-delay: 0.3s;
   background-color: rgba(71,75,255,0.8);
}

.spinners2 div:nth-child(3) {
   animation-delay: 0.45s;
   background-color: rgba(71,75,255,0.7);
}

.spinners2 div:nth-child(4) {
   animation-delay: 0.6s;
   background-color: rgba(71,75,255,0.6);
}

.spinners2 div:nth-child(5) {
   animation-delay: 0.75s;
   background-color: rgba(71,75,255,0.5);
}

@keyframes spinner-4t3wzl {
   0% {
      transform: rotate(0deg) translateY(-200%);
   }

   60%, 100% {
      transform: rotate(360deg) translateY(-200%);
   }
}
</style>