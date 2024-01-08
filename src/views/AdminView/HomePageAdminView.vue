<template>
    <div class="flex justify-between">
        <div class="relative overflow-x-auto w-full">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Role
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ user.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ user.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ user.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ user.role_id }}
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div>
            <button @click="logOut" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
                <svg class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/></svg>
                <div class="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
            </button>
        </div>
    </div>
</template>

<script>
    import api from '@/api'
    import axios from 'axios';
    export default {
        data() {
            return {
                user: ''
            }
        },
        created(){
            this.getUser()
        },
        methods: {
            async getUser(){
                try {
                    // Get the token from the Vuex store
                    const token = this.$store.state.auth.token;
                    console.log(token);
                    // Set the Authorization header with the token
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                    // Make the API request to retrieve user data
                    const res = await api.getUserDate();
                    console.log(res.data.name);
                    this.user = res.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async logOut(){
                try {
                    this.$store.dispatch('auth/setToken', null);
                    this.$store.dispatch('auth/setType_of_user', null);
                    this.$router.push('/login')
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>