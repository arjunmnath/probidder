'use client';
import {useEffect, useState} from "react";

const Page = () => {
    const [user, setUser] = useState({});
    const [ready, setReady] = useState(false);
    useEffect(() => {
       setUser(
        {
            'userId': 'user-1234',
            'username': 'John.Smith',
            'phone': '123-4567890',
            'email': 'john.smith@example.com',
            'firstName': 'John',
            'lastName': 'Smith',
            'houseFlatNo': '45B',
            'street': 'Main St',
            'city': 'New York',
            'pincode': 10001,
            'dateJoined': '2024-01-15T10:30:00.000Z',
            'isVerified': true
        })
    }, []);
    return <div className={`flex justify-center items-center`}>
    <div className={`border border-1 border-gray-800 border-opacity-25  rounded-2xl py-12 px-24`}>
        <div className="px-4  sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">Account Information</h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.firstName + " " + user.lastName}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Username</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.username}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Email address</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Phone</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.phone}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{`${user.houseFlatNo}, ${user.street}, ${user.city}, ${user.pincode}`}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Verified</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{user.isVerified ? "Yes" : "No"}</dd>
                </div>
            </dl>
        </div>
    </div>
    </div>
}


export default Page;