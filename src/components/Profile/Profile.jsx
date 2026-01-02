const Profile = ({nama}) => {
    return(
        <div>
            <h3>About Me</h3>
            <ul>
                Nama : {nama} 
            </ul>
            <p>Kedai Koppi bukan cuma soal kopi, tapi soal vibes.
            Tempat nongkrong, ngobrol, mikir, atau sekadar diam sambil ngopi.
            Datang sebagai tamu, pulang sebagai cerita.
            </p>
        </div>
    );
}

export default Profile;