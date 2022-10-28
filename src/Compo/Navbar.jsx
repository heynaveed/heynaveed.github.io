import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {TbLetterN} from 'react-icons/tb'

export default function Navbar({ProfileRef,AboutRef,SkillRef,ProjectRef,ContactRef}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}  className='ChackraNavBar' shadow='lg'>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <IconButton 
            size='lg' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>}
            aria-label='Open Menu' display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen} color='white' bg='black' _hover={{color :'white', bg : 'black'}}
          />
          <Flex justifyContent='space-between' alignItems='center' w='80%' m='auto'>
            <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '60%', lg : '40%'}} justifyContent='space-between' alignItems='center' color='white' fontWeight='600'>
              <Text onClick={ProfileRef}  cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectRef}  cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
              <a href="https://drive.google.com/file/d/1tfgE8dasU-MtL2lpZgNMdnPi2s5ppodK/view" target='_blank'><Text>Resume</Text> </a>
            </Flex>

            <Box>
                {/* <Text fontSize='20px' color='white'><TbLetterN/></Text> */}
                <Image width='40px' src='https://www.pngmart.com/files/10/Netflix-N-Logo-PNG-Photos.png'/>
            </Box>

          </Flex>
        </Flex> 
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg='black' color='white'>
            <Stack as={'nav'} spacing={4}>
              <Text cursor='pointer'>Home</Text>
              <Text  cursor='pointer'>About</Text>
              <Text  cursor='pointer'>Skills</Text>
              <Text  cursor='pointer'>Project</Text>
              <Text  cursor='pointer'>Contact</Text>
              <a href="https://drive.google.com/file/d/1tfgE8dasU-MtL2lpZgNMdnPi2s5ppodK/view" target='_blank'><Text cursor='pointer'>Resume</Text></a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}