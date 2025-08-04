import ProfileCard from './ChildComponent'

function ParentComponent() {
    let collageName = "piet";

    let profile = {
        'name': 'Gunn',
        'age': 20
    }

    return (
        <div>
            <ProfileCard profile={profile} collageName={collageName} />
        </div>
    )
}

export default ParentComponent;