import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelect = ({data, setData}) => {

  const handleChange = (event) => {
    setData({
      ...data,
      term: event.target.value,
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
        <MenuItem value={6}>6 Months</MenuItem>
        <MenuItem value={12}>12 Months</MenuItem>
        <MenuItem value={18}>18 Months</MenuItem>
        <MenuItem value={24}>24 Months</MenuItem>
        <MenuItem value={30}>30 Months</MenuItem>
        <MenuItem value={36}>36 Months</MenuItem>

      </Select>
    </FormControl>
  );
};

export default TenureSelect;
