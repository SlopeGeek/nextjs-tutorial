import {useState, useEffect} from 'react'
import firebase from 'firebase'
import '../fire'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


/* const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
}
 */

const auth = firebase.auth()
const provider = new firebase.auth.GithubAuthProvider();






export default function SignInScreen() {
    return (
        <div>
{/*             <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
 */}        </div>
    )
}
