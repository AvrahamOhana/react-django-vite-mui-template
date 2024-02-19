import React from "react";
import Box from '@mui/material/Box'
import { Button, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MySelectField from "./forms/MySelectField.jsx";
import MyDataPickerFields from "./forms/MyDataPickerFields";
import MyMultilineField from "./forms/MyMultilineField";
import { useForm } from "react-hook-form";

const Create = () => {
  const { handleSubmit, reset, setValue, control } = useForm();
  const submission = (data) => console.log(data);
  return (
    <form onSubmit = {handleSubmit(submission)}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          marginBottom: "40px",
         
        }}
      >
        <Typography sx={{ marginLeft: "20px" }}>Create Records</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          boxShadow: 3,
          padding: 4,
          flexDirection: "column",
          
        }}
      >
        <Box  sx={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px"
         
        }}>
          <MyTextField
            label="Name"
            name="name"
            control={control}
            placeholder="Provide a project name"
            width={'30%'}
          />
          <MyDataPickerFields label="Start Date" name="startDate" control={control}  width={'30%'}/>
          <MyDataPickerFields label="End Date" name="endDate" control={control}  width={'30%'}/>

          
        </Box>


        <Box  sx={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px"
         
        }}>
          <MyMultilineField
            label="Comments"
            name="comments"
            control={control}
            placeholder="Provide project comments"
            width={'30%'}
          />
          <MySelectField label="Status" name="status" control={control}  width={'30%'}/>
          <Box sx={{width: '30%'}}>
            <Button type="submit" variant="contained" color="primary"  sx={{width: '100%'}}>Create</Button>
          </Box>

          
        </Box>
     
      </Box>
      
    </form>
  );
};

export default Create;
