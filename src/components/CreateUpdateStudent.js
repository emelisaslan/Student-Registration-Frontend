import React, { useEffect, useState } from 'react';
import { InputMask } from 'primereact/inputmask';

// Service
import { createStudent, updateStudent } from '../services/StudentService';

// Styles
import { CUSWrapper, CUSForm, CUSHeading, CUSFormGroup, CUSInputItem, CUSInput, CUSSelect, CUSButton, CUSCloseButton } from '../sc/scCreateUpdateStudent';

// Icons
import { IconNameSurname, IconID, IconPhoneNumber, IconCity, IconDistrict, IconDescription, IconClose, DecorationGreen, DecorationPink } from './icons';

// File Upload
import { FileUpload } from 'primereact/fileupload';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "../sc/scProfileImg.css";

const CITIES = [
    {
        name: 'Ankara',
        districts: ['Etimesgut', 'Çankaya', 'Mamak', 'Yenimahalle']
    },
    {
        name: 'İstanbul',
        districts: ['Ataşehir', 'Ümraniye', 'Beşiktaş', 'Kadıköy']
    }
];

const CreateUpdateStudent = ({ type, studentToUpdate, open, setOpen, fetchedStudents, setFetchedStudents , setMessage, setMessageOpen}) => {
    const [selectedCity, setSelectedCity] = useState(-1);
    const [selectedDistrict, setSelectedDistrict] = useState(-1);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [student, setStudent] = useState({
        id: '',
        name: '',
        surname: '',
        phoneNumber: '',
        city: '',
        district: '',
        description: '',
    });

    useEffect(() => {
        if(type !== 'update')
            return;

        if(!studentToUpdate)
            closeCreateUpdateStudent();

        setStudent({ ...studentToUpdate });
        setSelectedCity(city => { 
            const index = CITIES.findIndex(el => el.name === studentToUpdate.city);
            setSelectedDistrict(CITIES[index].districts.findIndex(el => el === studentToUpdate.district));
            return index;
        });
        // eslint-disable-next-line
    }, [studentToUpdate]);

    const closeCreateUpdateStudent = () => {
        setOpen(false);
        setMessageOpen(false);
        setSelectedCity(-1);
        setSelectedDistrict(-1);
        setStudent({
            id: '',
            name: '',
            surname: '',
            phoneNumber: '',
            city: '',
            district: '',
            description: '',
            file: null
        });
    };

    const createUpdateStudent = (e, type, student) => {
        e.preventDefault();
        if(!student.id  || !student.name ||  !student.surname ||!student.phoneNumber 
            || !student.city || !student.district || !student.description){
                setMessage("Please fill all information");
                setMessageOpen(true);
                return;
        }

        if(student.id <= 0){
            setMessage("This student id cannot be smaller than 0!");
            setMessageOpen(true);
            return;
        }

        if(student.name.length < 2 ){
            setMessage("Enter a valid, at least 2 character name!");
            setMessageOpen(true);
            return;
        }

        if(student.surname.length < 2 ){
            setMessage("Enter a valid, at least 2 character surname!");
            setMessageOpen(true);
            return;
        }

        if(!student.city) {
            setMessage("Please select a city");
            setMessageOpen(true);
            return;
        }

        if(!student.district){
            setMessage("Please select a district");
            setMessageOpen(true);
            return;
        }

        const constructedStudent = {...student, file: uploadedFiles.length > 0 ? uploadedFiles[uploadedFiles.length - 1] : null};
        (type === 'create' ? createStudent(constructedStudent) : updateStudent(constructedStudent))
        .then(({ data }) => {
            if(type === 'update') {
                const index = fetchedStudents.findIndex(s => s.id === student.id);
                setFetchedStudents(fetchedStudents => {
                    const newFetchedStudents = fetchedStudents.filter(s => s.id !== student.id);
                    newFetchedStudents.splice(index, 0, { ...data });
                    return newFetchedStudents;
                });
            } else
                setFetchedStudents(students => [...students, {...data}]);

            closeCreateUpdateStudent();
        }).catch(() => setMessage("Cannot " + type + " the student"));
    };

    const onSelect = ({ files }) => {
        if(files.length > 0)
            setUploadedFiles(uploadedFiles => [...uploadedFiles, files[0]]);
    }

    const onRemove = () => {
        if(uploadedFiles.length > 0)
            setUploadedFiles(uploadedFiles => {
                uploadedFiles.pop();
                return [...uploadedFiles];
            });
    }
 
    return (
        <CUSWrapper openWindow = {open ? "true" : "false" }>
            <DecorationGreen />
            <DecorationPink />
            <CUSCloseButton onClick={closeCreateUpdateStudent}>
                <IconClose />
            </CUSCloseButton>
            <CUSForm>
                <CUSHeading>{ type === 'create' ? 'Create Student' : 'Update Student' }</CUSHeading>
                <CUSFormGroup>
                    <CUSInputItem>
                        <IconNameSurname />
                        <CUSInput 
                            type="text" 
                            placeholder="Name" 
                            value={student.name} 
                            onChange={e => setStudent(student => {return { ...student, name: e.target.value }})} 
                            required
                            autoComplete="off"
                        />
                    </CUSInputItem>
                    <CUSInputItem>
                        <IconNameSurname />
                        <CUSInput 
                            type="text" 
                            placeholder="Surname" 
                            value={student.surname} 
                            onChange={e => setStudent(student => {return { ...student, surname: e.target.value }})} 
                            required
                        />
                    </CUSInputItem>
                </CUSFormGroup>
                <CUSFormGroup>
                    <CUSInputItem>
                        <IconID />
                        <CUSInput 
                            type="number" 
                            placeholder="ID" 
                            value={student.id} 
                            onChange={e => setStudent(student => {return { ...student, id: e.target.value }})} 
                            required
                            disabled={type === 'update'}
                        />
                    </CUSInputItem>
                    <CUSInputItem>
                        <IconPhoneNumber />
                        <CUSInput as ={InputMask}
                            style={{fontSize: '1.3rem'}}
                            type="Phone"
                            inputMode = "numeric"
                            placeholder="Phone Number" 
                            value={student.phoneNumber} 
                            onChange={e => setStudent(student => {return { ...student, phoneNumber: e.target.value }})} 
                            mask = "(0999) 999 99 99"
                            maskChar=""
                            required
                        />
                    </CUSInputItem>
                </CUSFormGroup>
                <CUSFormGroup>
                    <CUSInputItem>
                        <IconCity />
                        <CUSSelect name="" id="" onChange={e => { 
                            setSelectedDistrict(-1);
                            setSelectedCity(e.target.value);
                            setStudent(student => { 
                                return { ...student, city: e.target.value !== "-1" ? CITIES[e.target.value].name : '', district: ''}
                            });
                        }}>
                            <option value="-1" selected={selectedCity === -1}>City</option>
                            {CITIES.map((city, index) => <option key={index} value={index} selected={selectedCity === index}>{city.name}</option>)}
                        </CUSSelect>
                    </CUSInputItem>
                    <CUSInputItem>
                        <IconDistrict />
                        <CUSSelect name="" id="" onChange={e => {
                            setSelectedDistrict(e.target.value);
                            setStudent(student => { return { ...student, district: e.target.value !== "-1" ? e.target.value : '' }})
                        }}>
                            <option value="-1" selected={selectedDistrict === -1}>District</option>
                            {CITIES[selectedCity] && CITIES[selectedCity].districts.map((district, index) => <option key={index} value={district} selected={selectedDistrict === index}>{district}</option>)}
                        </CUSSelect>
                    </CUSInputItem>
                </CUSFormGroup>
                <CUSFormGroup>
                    <CUSInputItem hasDescription>
                        <IconDescription />
                        <CUSInput 
                            hasDescription
                            type="text" 
                            placeholder="Description" 
                            value={student.description} 
                            onChange={e => setStudent(student => {return { ...student, description: e.target.value }})} 
                            required
                        />
                    </CUSInputItem>
                </CUSFormGroup>
                <FileUpload
                    style={{ margin: '2rem 0'}}
                    name="file"
                    accept="image/*"
                    onSelect={onSelect}
                    onRemove={onRemove}
                    uploadOptions={{ style: {display: 'none'} }}
                    cancelOptions={{ style: {display: 'none'} }}
                    emptyTemplate={
                        <p className="p-m-0"> Drag and drop files to here to upload. (optional)</p>
                    }
                />
                <CUSFormGroup hasButton>
                    <CUSButton type="submit" onClick={e => createUpdateStudent(e, type, student) }>{ type === 'create' ? 'Register' : 'Update' }</CUSButton>
                </CUSFormGroup>
            </CUSForm>
        </CUSWrapper>
    )
};

export default CreateUpdateStudent;