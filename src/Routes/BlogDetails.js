import { Avatar, Container, Divider, Stack, Typography } from '@mui/material';



const BlogDetails = () => {

    const containerStyle = {
        'display': 'flex',
        'flexDirection': 'column',
        'gap': '10px',
        'marginTop': '15px',
        'padding': '10px 10px 10px 10px',
        'boxShadow': 5,
        'borderRadius': 2,
        'textAlign': 'start'
    };


    return (
        <div>
            <Container maxWidth='md' sx={containerStyle}>
                <Typography variant='h4'>I am title</Typography>
                <Divider variant='fullWidth' light={true}></Divider>
                <Stack direction="row" spacing={1} sx={{ 'alignItems': 'center', 'height': '30px' }}>
                    <Avatar >OP</Avatar>
                    <Typography>Omkar Pembarti . </Typography>
                    <Typography>15 Sept 1996</Typography>
                </Stack>
                <Divider variant='inset'></Divider>
                <img src='http://localhost:6000/image/1693987445657-blog-Screenshot%202023-08-14%20111839.png'
                    width='100%' height='auto' alt='Loading'
                />
                <p style={{ 'textAlign': 'justify' }}>
                    Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in
                    a piece of classical Latin literature from
                    45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical
                    literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the theory
                    of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                    in section 1.10.32.The standard chunk of Lorem Ipsum used since
                    the 1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                </p>

            </Container>

        </div>
    )
}

export default BlogDetails
