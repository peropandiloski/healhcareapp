function deleteDoctor(id) {
    fetch(`http://localhost:3030/doctors/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.error) {
                location.reload();
            }
        })
        .catch(err => {
            console.log('Error during deleting a doctor: ', err);
        });
}

function deletePatient(id) {
    fetch(`http://localhost:3030/patients/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.error) {
                location.reload();
            }
        })
        .catch(err => {
            console.log(`Error during deleting a patient: `,
                err);
        })






}

