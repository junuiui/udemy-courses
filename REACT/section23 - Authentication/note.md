Authentication
---

## Contents
1. How Authentication Works in React Apps
2. Implementing User Authentication  
3. Adding Authentication Persistence & Auto-Logout

### What is Authentication?
- `Authentication` is needed if content should be **protected**
  - i.e., if content should not be accessible by everyone

- Getting Permission
  - Client (Browser) ➡️ `Request (with user credential)` ➡️ Server (backend)
  - Server (backend) ⬅️ `Response (access granted: yes/no)` ⬅️ Client (Browser)                            
    - A 'yes' is not enough to access protected resources / API endpoints
    - Any client cnould simply send a request to your backend that 'tells' the backend that we previously were granted access

- Solution
  - **Serer-side Sessions**
    - Store unique identifier on server, send some identifier to client
    - Client sends identifier along with requests to protected resources
    - Server can then check if the identifier is valid (= previously issued by server to client)
  - **Authentication Tockens**
    - Create (but not store) 'permission' token on server & send it to the client
    - Client attaches token to future requests for protected resources
    - Server can then verify the attached token

  - *NEW* Getting Permission
    - Client (Browser) ➡️ `Request (with user credential)` ➡️ Server (backend)
    - Server (backend) ⬅️ `Response (Auth Token)` ⬅️ Client 