"use server"

import { revalidatePath } from "next/cache";

export async function getSeminars(path){
    try {
        const res = await fetch("http://localhost:3000/api/seminars");
        if (!res.ok){
            return {error: "Unable to Find data."};
        }
        revalidatePath("/admin/seminars")
        return res.json();
    } catch (error) {
        return {error: error};
    }
}

export async function getSeminarsById(id){
    try {
        const res = await fetch(`http://localhost:3000/api/seminars/${id}`);
        if (!res.ok){
            return {error: "Unable to Find data."};
        }
        return res.json();
    } catch (error) {
        return {error: error};
    }
}

export async function setSeminars(id, data){
    try {
        const res = await fetch(`http://localhost:3000/api/seminars/${id}`, {
          method: "PUT",
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          return {faild: "Unable to update, 500"}
        }
        revalidatePath("/admin/seminars");
        return {success: "Data updated Successfully, 200"}
      } catch (error) {
        return {error: error};
      }
}

export const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/user");
        if (!res.ok){
            return {error: "Unable to Find data."};
        }
        return res.json();
    } catch (error) {
        return {error: error};
    }
}