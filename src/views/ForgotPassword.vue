<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Forgot Paasword
                    </h1>
                    <form @submit="forgot" class="space-y-4 md:space-y-6" >
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="text" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">
                                        {{ message }}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Send</button>
                        <!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? 
                            <RouterLink to="/register">
                                <button class="font-medium text-slate-900 hover:underline dark:text-slate-800">Sign up</button>
                            </RouterLink>
                        </p> -->
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
    import api from '@/api'
    export default {
        data() {
            return {
                email: '',
                message: '',
                loading: false
            }
        },
        methods: {
            ...mapActions('auth', ['auth/setToken']),
            async forgot(e) {
                e.preventDefault()
                try {
                    const token = this.$store.state.auth.token;
                    const response = await api.forgotPassword({
                        email: this.email,
                    })
                    console.log(response.data.status);
                    this.message = response.data.status;
                    alert(response.data.status)
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
</script>
