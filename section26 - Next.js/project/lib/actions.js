'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// creates server actions, guarantees to execute only in server
// moved here from page.js (meal/share) to use 'use server/client'
export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  await saveMeal(meal);

  redirect('/meals');
}