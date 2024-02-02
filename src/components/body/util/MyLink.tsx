import {Link} from "@mui/material";


interface MyLinkProps {
    href: string;
    text: string;
    color?: string;
}

const MyLink = (props: MyLinkProps) => {
    return (
        <Link
            href={props.href}
            color={props.color ?? 'text.primary'}
            target="_blank"
            rel="noreferrer">
            {props.text}
        </Link>
    );
};

export default MyLink;
