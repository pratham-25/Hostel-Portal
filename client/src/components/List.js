import React, { useEffect, useState } from 'react'
import Single from './Single';
import "../css/list.css";

const Users = () => {

    let [boys, setBoys] = useState([]);
    let [girls, setGirls] = useState([]);

    const fetchBoys = async () => {
        try {
            const res = await fetch("https://hostel-portal.vercel.app/maleusers")

            const boys = await res.json();
            // boys = res;
            setBoys(boys.users);
            // boys = boysData;
            console.log('BOYS:', boys);
        }
        catch (e) {
            console.log(e);
        }

    }
    const fetchGirls = async () => {
        try {
            const res = await fetch("https://hostel-portal.vercel.app/femaleusers")

            const girls = await res.json();
            // boys = res;
            setGirls(girls.users);
            // boys = boysData;
            console.log('GIRLS:', girls);
        }
        catch (e) {
            console.log(e);
        }
    }

    




    useEffect(() => {
        fetchBoys();
        fetchGirls();
    }, [])



    return (
        <>
            {/* <Single /> */}
            <section>

                <div className="column">
                    <h1 className="boyshead">Boys Hostel</h1>
                    <table>
                        <thead>
                            <tr>
                                {/* <th scope="col">Sr. No.</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boys.map((boy) => {
                                const { fullname, email, mobile } = boy;
                                return (
                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>{fullname}</td>
                                        <td>{email}</td>
                                        <td>{mobile}</td>
                                    </tr>
                                );
                            })}
                            ;
                        </tbody>
                    </table>
                </div>

                <div className="column">
                    <h1 className="girlshead">Girls Hostel</h1>
                    <table >
                        <thead>
                            <tr>
                                {/* <th scope="col">Sr. No.</th> */}
                                <th >Name</th>
                                <th >Email</th>
                                <th >Phone</th>
                            </tr>
                        </thead>
                        <tbody>

                            {girls.map((girl) => {
                                const { fullname, email, mobile } = girl;
                                return (
                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>{fullname}</td>
                                        <td>{email}</td>
                                        <td>{mobile}</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>

            </section>
            <footer
                id="sticky-footer"
                className="flex-shrink-0 py-3 bg-dark text-white-50"
            >
                <div className="container text-center">
                    <small id="copyrighttext">Copyright &copy; PICT Hostel</small>
                </div>
            </footer>
        </>
    );
}

export default Users