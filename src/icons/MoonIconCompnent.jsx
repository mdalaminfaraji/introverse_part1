import { Box } from "@mui/material";

const MoonIconComponent = () => {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      sx={{
        width: 24, // Adjust size as needed
        height: 24,
      }}
    >
      <path
        d="M12.004 2C12.004 2 10.896 2.002 10.774 2.006C5.377 2.182 1 6.736 1 12.306C1 18.089 5.493 22.5 11.275 22.5C16.89 22.5 21.262 18.224 21.994 12.657C22.002 12.617 22.004 12.578 22.004 12.539C22.004 12.5 22.004 12.461 21.994 12.421C21.27 7.319 17.048 2.998 12.004 2ZM12.004 20.5C6.763 20.5 2.559 16.298 2.559 11.059C2.559 6.926 6.088 3.426 10.203 3.024C14.267 2.631 17.95 5.788 18.386 9.774C18.47 10.529 18.506 11.297 18.506 12.066C18.506 16.229 15.147 19.75 11.004 19.75C11.001 19.75 11 19.75 10.998 19.75C10.999 19.75 10.999 19.75 11.001 19.75H12.004Z"
        fill="currentColor" // Use currentColor for the color to inherit the text color
      />
    </Box>
  );
};

export default MoonIconComponent;
