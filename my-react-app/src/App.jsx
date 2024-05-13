import Student from "./Student.jsx";
function App() {
    return (
        <>
            <Student
                name="Spongebob"
                age="30"
                isStudent={true}
            />
            <Student
                name="Patrick"
                age={25}
                isStudent={false}
            />
            <Student
                name="Squidward"
                age={20}
                isStudent={false}
            />

            <Student
                name="Sandy"
                age={28}
                isStudent={true}
            />
            <Student />
            <Student />
        </>
    );
}
export default App;
