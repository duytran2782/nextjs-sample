
export default function Home() {
  const create = async (formData: FormData) => {
    'use server'
    console.log(">>> Check Data form", formData)
  }

  return (
    <>
      <h1>Hello word!</h1>
      <form action={create}>
        <input type="text" name="username" />
        <button type="submit">Save</button>
      </form>
    </>
  )
}
