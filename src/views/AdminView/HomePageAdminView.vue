<template>
    <div class="relative overflow-x-auto">
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
            }
        }
    }
</script>