import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';



export const useAuthStore = create((set) => ({
    authUser: null,
    onlineUsers: [],
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');
            set({ authUser: res.data });
        } catch (error) {
            console.error('Error checking auth:', error);
            set({ authUser: null });
        }finally {
            set({ isCheckingAuth: false });
        }
    },
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
           const res= await axiosInstance.post('/auth/signup', data);
           toast.success("Account created successfully");
           set({ authUser: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        }finally {
            set({ isSigningUp: false });
        }
    },
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            toast.success("Logged in successfully");
            set({ authUser: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        }finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout');
            toast.success("Logged out successfully");
            set({ authUser: null });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
            const res = await axiosInstance.put("/auth/update-profile-pic", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
            return res.data;
    } catch (error) {
      console.log("error in update profile:", error);
            toast.error(error?.response?.data?.message || "Failed to update profile");
            throw error;
    } finally {
      set({ isUpdatingProfile: false });
    }
    },

        removeProfilePic: async () => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.delete("/auth/remove-profile-pic");
            set({ authUser: res.data });
            toast.success("Profile photo removed");
            return res.data;
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to remove profile photo");
            throw error;
        } finally {
            set({ isUpdatingProfile: false });
        }
    }
  
    

}));