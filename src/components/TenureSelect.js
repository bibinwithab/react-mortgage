import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({data, setData}) => {

  const handleChange = (event) => {
    setData({
      ...data,
      tenure: event.target.value,
    })
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.term}
        label="Tenure"
        onChange={handleChange}
      >
        <MenuItem value={12}>12 Months</MenuItem>
        <MenuItem value={18}>18 Months</MenuItem>
        <MenuItem value={24}>24 Months</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
