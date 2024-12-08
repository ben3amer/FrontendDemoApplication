import { Backdrop, Box, Typography } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { orange } from "@mui/material/colors";
import { useAppSelector } from "../../store";

const LoadingComponent = (props: CircularProgressProps = {}) => {
  const isLoading = useAppSelector((x) => x.application?.customer?.isFetching);
  return (
    <>
      {isLoading !== undefined && isLoading && (
        <Backdrop
          sx={() => ({
            color: orange[700],
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          })}
          open
        >
          <Box>
            <Typography
              variant="h4"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {"Loading..."}
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <CircularProgress
              variant="determinate"
              sx={(theme) => ({
                color: theme.palette.grey[200],
                ...theme.applyStyles("dark", {
                  color: theme.palette.grey[800],
                }),
              })}
              size={40}
              thickness={4}
              {...props}
              value={100}
            />
            <CircularProgress
              variant="indeterminate"
              disableShrink
              sx={(theme) => ({
                color: orange[700],
                animationDuration: "550ms",
                position: "absolute",
                left: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round",
                },
                ...theme.applyStyles("dark", {
                  color: orange[300],
                }),
              })}
              size={40}
              thickness={4}
              {...props}
            />
          </Box>
        </Backdrop>
      )}
    </>
  );
};

export default LoadingComponent;
