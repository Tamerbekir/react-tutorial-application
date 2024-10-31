import { useEffect, useState } from "react"


export default function UserData() {

  const [deletedText, setDeletedText] = useState(false)

  const [savedText, setSavedText] = useState('')


  const [newUserInfoAdded, setNewUserInfoAdded] = useState(() => {
    const storedInfo = localStorage.getItem('userInfo')

    if (storedInfo) {
      return JSON.parse(storedInfo)
    } else {
      return []
    }
  })


  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(newUserInfoAdded))
  }, [newUserInfoAdded])


  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    bio: ''
  })



  // const [counter, setCounter] = useState(0)

  // const countUp = () => {
  //   setCounter(counter + 1)
  // }
  // const countDown = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1)
  //   } else {
  //     setCounter(0)
  //   }
  // }


  const changeUserInfo = (event) => {
    const { name, value } = event.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })
    // console.log(userChangeBio)
  }


  const handleUserInfo = () => {
    const updatedInfo = [...newUserInfoAdded, userInfo]
    setNewUserInfoAdded(updatedInfo)
    setUserInfo({
      name: '',
      age: '',
      bio: ''
    })
    setSavedText('Saved!')
  }

  const handleDeleteUserInfo = () => {
    localStorage.clear()
    setDeletedText(true)
  }


  return (
    <div>
      {/* {!counter ? (
        <p>Start Counting</p>
      ) : (
        <p>Keep going!</p>
      )}
      <p>{counter}</p>
      <button onClick={countUp}>Increment</button>
      <button onClick={countDown}>Decrement</button> */}

      <div>
        {!userInfo.name ? (
          <p>What is your name?</p>
        ) : (
          <p>Hey there, {userInfo.name}</p>
        )}
        {deletedText && !userInfo.name && (
          <p style={{ color: 'red' }} >Deleted</p>
        )}
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={changeUserInfo}
        />

        {!userInfo.age ? (
          <p>What is your age?</p>
        ) : (
          <p>You are {userInfo.age} years old</p>
        )}
        {deletedText && !userInfo.age && (
          <p style={{ color: 'red' }} >Deleted</p>
        )}
        <input
          type="number"
          name="age"
          value={userInfo.age}
          onChange={changeUserInfo}
        />

        {!userInfo.bio ? (
          <p>Tell us about yourself</p>
        ) : (
          <p>Bio</p>
        )}
        {deletedText && !userInfo.bio && (
          <p style={{ color: 'red' }} >Deleted</p>
        )}
        <textarea
          type="text"
          style={{ height: '200px', width: '500px', textAlign: 'top-left' }}
          value={userInfo.bio}
          name="bio"
          onChange={changeUserInfo}
        />
        <br />
        <button onClick={handleUserInfo}>Save</button>
        <p>{savedText}</p>
        <button onClick={handleDeleteUserInfo}>Delete all info</button>
        <div>
          {newUserInfoAdded.map((items, index) => (
            <p key={index}>
              Name: {items.name},
              Age: {items.age},
              Bio: {items.bio}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}