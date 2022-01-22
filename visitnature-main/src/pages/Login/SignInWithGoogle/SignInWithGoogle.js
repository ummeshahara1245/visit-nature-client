import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const SignInWithGoogle = () => {
    const {handleGoogleSignIn} = useFirebase();
    return (
        <div className="h-screen">
            <h3 className="text-center mt-3 text-green-500">Sign in just a click.</h3>
            <div onClick={handleGoogleSignIn} className="mx-auto text-center shadow mt-5 border  py-3  w-80 rounded flex justify-center items-center">
                <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
                <button className="text-xl ml-2">Sign In With Google</button>
            </div>
        </div>
    );
};

export default SignInWithGoogle;