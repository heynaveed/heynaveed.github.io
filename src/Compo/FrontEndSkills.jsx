import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"

export default function FrontEndSkills(){
    const FrontEndSkills=[{
        id: 1,
        image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png',
        title: 'HTML5'
    },
    {
        id: 2,
        image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
        title: 'CSS3'
    },
    {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        title: 'JavaScript'
    }, 
    {
        id: 4,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        title: 'React.Js'
    }, 
    {
        id: 5,
        image: 'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
        title: 'Redux.Js'
    }, 
    {
        id: 6,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        title: 'TypeScript'
    }, 
    {
        id: 7,
        image: 'https://authy.com/wp-content/uploads/npm-logo.png',
        title: 'NPM'
    }, 
    {
        id: 8,
        image: 'https://img.icons8.com/color/512/chakra-ui.png',
        title: 'Chakra UI'
    }]
    return(
        <>
                    <SimpleGrid columns={[3, 3, 3, 3]} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' rowGap='15px'>
                        {FrontEndSkills.map((elem) => {
                            return <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} key={elem.id}>
                                <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto' src={elem.image}shadow='lg' />
                                <Text textAlign='center' mt={{base : '10px', lg : '15px'}}>{elem.title}</Text>
                            </Box>
                        })}
                    </SimpleGrid>
        </>
    )
}