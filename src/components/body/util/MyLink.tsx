import {Link} from "@mui/material";


export interface MyLinkProps {
    href: string;
    text: string;
    color?: string;
}

const MyLink = (props: MyLinkProps) => {
    return (
        <Link
            sx={{
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            }}
            href={props.href}
            color={props.color ?? 'secondary'}
            target="_blank"
            rel="noreferrer">
            {props.text}
        </Link>
    );
};

export default MyLink;
