import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss';
import fs from 'node:fs'

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Error: Loading meals failed ')
  return db.prepare('SELECT * FROM meals').all(); //run - insert, all - fetching data, get - single row
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug); // safe way
}


// sanitize, upload to public folder
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions); // sanitize

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`); // to store 
  const bufferedImage = await meal.image.arrayBuffer();

  // function: to do after 
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  }); // write into path

  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}
