import { Box, Typography } from "@mui/joy"
interface Props {
    content: string;
    show: boolean;
    setShow: (x: boolean) => void;
}
export default function Modal({ content, setShow, show }: Props) {
    return (
        <Box sx={{
            position: "fixed",
            inset: 0,
            display: show ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                position: "absolute",
                inset: 0,
                backdropFilter: "blur(5px)"
            }}></Box>
            <Box
                zIndex={10}
                display={'flex'}
                justifyContent={"center"}
                alignContent={"center"}
                width={500}
                height={400}
                bgcolor={"gray"}
            >
                <Typography>
                    {content}
                </Typography>
            </Box>

        </Box>
    )
}
