import React, { useState, useEffect } from 'react'

// Service
import { deleteStudent } from '../services/StudentService';

// Styles
import { ListWrapper, ListContainer, ListHeading, ListDivider, ListHeader, ListSearch, ListSearchInput,
ListCreateStudent, ListTable, ListTableRow, ListTableHeading, ListTableData, ListTableButton } from '../sc/scListStudent';
import { ListDeletePopup, ListDeletePopupContainer, ListDeletePopupText, ListDeletePopupButtons, ListDeletePopupButton } from '../sc/scListStudent';

// Icons
import { IconSearch, IconAdd, IconEdit, IconDelete, IconDeleteStudent } from './icons';

const ListStudents = ({ setType, setOpen, setStudentToUpdate, fetchedStudents, setFetchedStudents, setMessage }) => {
	const [students, setStudents] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [deleteWindowOpen, setDeleteWindowOpen] = useState(false);
	const [studentToDelete, setStudentToDelete] = useState(null);

	useEffect(() => {
		setStudents([...fetchedStudents]);
		setSearchValue('');
	}, [fetchedStudents]);

	useEffect(() => {
		if(!searchValue) {
			setStudents([...fetchedStudents]);
			return;	
		}

		searchStudents(searchValue);
	// eslint-disable-next-line
	}, [searchValue]);

	const searchStudents = (searchValue) => {
		setStudents(fetchedStudents.filter(student => 
			((student.id).toString().toLowerCase().search(searchValue) > -1 || student.name.toLowerCase().search(searchValue) > -1 || 
			student.surname.toLowerCase().search(searchValue) > -1 || student.phoneNumber.toLowerCase().search(searchValue) > -1) || 
			student.city.toLowerCase().search(searchValue) > -1 || student.district.toLowerCase().search(searchValue) > -1));
	};

	const openCreateStudentWindow = () => {
		setType('create');
		setOpen(true);
	};

	const openUpdateStudentWindow = (e, student) => {
		e.preventDefault();
		setType('update');
		setOpen(true);
		setStudentToUpdate({ ...student });
	};
	
	const deleteCurrentStudent = (e, student) => {
		e.preventDefault();
		deleteStudent(student.id)
		.then(() => setFetchedStudents(students => students.filter(s => s.id !== student.id)))
		.catch(() => setMessage("Cannot delete student"));
		closeDeleteStudentWindow();
	};

	const openDeleteStudentWindow = (e, student) => {
		e.preventDefault();
		setStudentToDelete({ ...student });
		setDeleteWindowOpen(true);
	};

	const closeDeleteStudentWindow = (e = null) => {
		if(e)
			e.preventDefault();

		setStudentToDelete(null);
		setDeleteWindowOpen(false);
	}

    return (
		<ListWrapper>
			<ListDeletePopup deleteWindowOpen={ deleteWindowOpen ? 'true' : 'false' }>
				<ListDeletePopupContainer>
					<IconDeleteStudent />
					<ListDeletePopupText>Are you sure about removing this student?</ListDeletePopupText>
					<ListDeletePopupButtons>
						<ListDeletePopupButton onClick={e => closeDeleteStudentWindow(e)}>Cancel</ListDeletePopupButton>
						<ListDeletePopupButton onClick={e => deleteCurrentStudent(e, studentToDelete)} delete>Delete</ListDeletePopupButton>
					</ListDeletePopupButtons>
				</ListDeletePopupContainer>
			</ListDeletePopup>
			<ListContainer>
				<ListHeading>Student List</ListHeading>
				<ListDivider />
				<ListHeader>
					<ListSearch>
						<IconSearch />
						<ListSearchInput value={ searchValue } onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search"/>
					</ListSearch>
					<ListCreateStudent onClick={openCreateStudentWindow}>Add Student <IconAdd /></ListCreateStudent>
				</ListHeader>
				<ListTable>
					<thead>
						<ListTableRow>
							<ListTableHeading invisibleOnSmallMobile>Photo</ListTableHeading>
							<ListTableHeading>ID</ListTableHeading>
							<ListTableHeading>Name</ListTableHeading>
							<ListTableHeading invisibleOnMobile>Surname</ListTableHeading>
							<ListTableHeading big invisibleOnTablet>Phone Number</ListTableHeading>
							<ListTableHeading invisibleOnTablet>City</ListTableHeading>
							<ListTableHeading invisibleOnTablet>District</ListTableHeading>
							<ListTableHeading>Actions</ListTableHeading>
						</ListTableRow>
					</thead>
					<tbody>
						{ students.map(student => {
							return <ListTableRow key={ student.id }>
								<ListTableData invisibleOnSmallMobile photo>
									{ student.photo && <div><img src={"http://localhost:8080/imagedata/" + student.photo} alt="" /></div> }
									{ !student.photo && <div>...</div> }
								</ListTableData>
								<ListTableData>{ student.id }</ListTableData>
								<ListTableData>{ student.name }</ListTableData>
								<ListTableData invisibleOnMobile>{ student.surname }</ListTableData>
								<ListTableData big invisibleOnTablet>{ student.phoneNumber }</ListTableData>
								<ListTableData invisibleOnTablet>{ student.city }</ListTableData>
								<ListTableData invisibleOnTablet>{ student.district }</ListTableData>
								<ListTableData>
									<ListTableButton onClick={e => openUpdateStudentWindow(e, student)}>
										<IconEdit />
									</ListTableButton>
									<ListTableButton onClick={e => openDeleteStudentWindow(e, student)}>
										<IconDelete />
									</ListTableButton>
								</ListTableData>
							</ListTableRow>
					}) }
					</tbody>
				</ListTable>
			</ListContainer>
		</ListWrapper>
    )
};

export default ListStudents;