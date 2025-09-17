import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {

  const { addOpinion } = use(OpinionsContext);

  async function shareOpinionAction(prev, formData) {
    const title = formData.get('title')
    const body = formData.get('body')
    const userName = formData.get('userName')

    let errors = [];

    if (title.trim().length < 5) {
      errors.push('Title Error')
    }

    if (body.trim().length < 5) {
      errors.push('Body Error')
    }

    if (!userName.trim()) {
      errors.push('UserName Error')
    }

    if (errors.length > 0) {
      return {
        errors, enteredValues: {
          title, body, userName
        }
      };
    }

    // No errors, send backend
    await addOpinion( { title, body, userName })
    return { errors: null };
  }

  const [formState, formAction] = useActionState(shareOpinionAction, { errors: null })

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={ formAction }>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={ formState.enteredValues?.userName } />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={ formState.enteredValues?.title } />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={ 5 } defaultValue={ formState.enteredValues?.body }></textarea>
        </p>

        { formState.errors && <ul className="errors">
          { formState.errors.map((error) => <li key={ error }>{ error }</li>) }
        </ul> }

        <Submit />
      </form>
    </div>
  );
}
