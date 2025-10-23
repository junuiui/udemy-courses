'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !meal.title || meal.title.trim() === ''
}

// creates server actions, guarantees to execute only in server
// moved here from page.js (meal/share) to use 'use server/client'
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  // important to do the server side check
  if (isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0) {
      return {
        message: "Invalid input.",

      };
  }

  await saveMeal(meal);
  revalidatePath('/meals', 'layout'); // revalidate the path (only meals in this case)
  redirect('/meals');
}