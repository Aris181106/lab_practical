function UserProfile() {
  return (
    <div className="profile">
      <h1>Ho so ca nhan</h1>
      <img src="photo.jpg" alt="Ảnh đại diện" />
      <table>
        <tbody>
          <tr>
            <td>Ho ten:</td>
            <td>Nguyen Viet Tien</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>minh@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default UserProfile;
