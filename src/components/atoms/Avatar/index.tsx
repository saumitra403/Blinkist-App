import Avatar from '@mui/material/Avatar';

const AvatarComponent = ({...args}: any) => {
    return (<Avatar sx={{backgroundColor: '#69A6E3'}} {...args} data-testid="box">A</Avatar>)
}

export default AvatarComponent;