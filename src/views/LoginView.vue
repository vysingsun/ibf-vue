
<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form @submit="login" class="space-y-4 md:space-y-6" >
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="text" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" v-model="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <button @click="goToForgotPassword" class="text-sm font-medium text-slate-950 hover:underline dark:text-slate-500">Forgot password?</button>
                        </div>
                        <button type="submit" class="w-full text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sign in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? 
                            <RouterLink to="/register">
                                <button class="font-medium text-slate-900 hover:underline dark:text-slate-800">Sign up</button>
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
    import { mapActions } from 'vuex'
    import api from '@/api' // Import your API module
    import { initFlowbite } from 'flowbite';
    import { useRouter } from 'vue-router';
    export default {
        data() {
            return {
                email: '',
                password: '',
                loading: false
            }
        },
        mounted() {
            initFlowbite();
        },
        methods: {
            ...mapActions('auth', ['auth/setToken']),
            async login(e) {
                e.preventDefault()
                try {
                    const response = await api.login({
                        email: this.email,
                        password: this.password
                    })
                    
                    // Save the token in Vuex
                    this.$store.dispatch('auth/setToken', response.data.token)
                    this.$store.dispatch('auth/setType_of_user', response.data.user.role.type_of_user);
                    // Redirect the user based on their role
                    const userRole = response.data.user.role.type_of_user;
                    if (userRole === 'Admin') {
                        this.$router.push('/admin')
                    } else {
                        this.$router.push('/')
                    }
                } catch (error) {
                    console.error(error)
                }
            },
            goToForgotPassword() {
                this.$router.push('/forgot'); // Replace '/forgot-password' with the actual path to your forgot password route
            },
        }
        // methods: {
        //     async login(e){
        //         e.preventDefault()
        //         this.loading = true
        //         try {
        //             await axios.post("http://127.0.0.1:8000/api/login", {
        //                 email:this.email,
        //                 password:this.password,
        //             }, {
                        
        //             }).then( res => {
        //                 this.loading = false
        //                 this.$router.push({ name: "HomePage" });
        //                 this.$store.commit("setUserToken",res.data.token)
        //                 this.$store.commit("setType_of_user",res.data.user.role.type_of_user)
        //             })
        //         } catch (error) {
        //             console.log(error)
        //             this.loading = false
        //         }
        //     }
        // }
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