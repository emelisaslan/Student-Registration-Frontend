import React, { useState, useEffect } from 'react';

// Service
import { readStudents } from '../services/StudentService';

// Components
import ListStudents from '../components/ListStudents';
import CreateUpdateStudent from '../components/CreateUpdateStudent';

//AlertBox 
import AlertBox from '../components/AlertBox';

// Styles
import { GlobalStyles } from '../sc/scGlobal';

// Icons
import { DecorationGreen, DecorationPink } from '../components/icons';

const Students = () => {
    const [type, setType] = useState('create');
    const [open, setOpen] = useState(false);
    const [studentToUpdate, setStudentToUpdate] = useState(null);
    const [fetchedStudents, setFetchedStudents] = useState([]);
    const [message, setMessage] = useState("");
    const [messageOpen, setMessageOpen] = useState(false);

    useEffect(() => {
        readStudents()
        .then(response => setFetchedStudents([...response.data]))
        .catch(() => console.log("Cannot connect to the server"));
    }, []);

    return (
        <>
            <DecorationGreen />
            <DecorationPink />
            <GlobalStyles />
            <ListStudents fetchedStudents={fetchedStudents} setFetchedStudents={setFetchedStudents} setOpen={setOpen} setType={setType} setStudentToUpdate={setStudentToUpdate} setMessage={setMessage}/>
            <CreateUpdateStudent fetchedStudents={fetchedStudents} setFetchedStudents={setFetchedStudents} open={open} setOpen={setOpen} type={type} studentToUpdate={studentToUpdate} setMessage={setMessage} setMessageOpen={setMessageOpen}/>
            <AlertBox message={message} messageOpen={messageOpen} setMessageOpen={setMessageOpen} />
        </>
    );
};

export default Students;