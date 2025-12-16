frontend/src/components/ConnectionForm/ConnectionForm.jsx [57:73]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                <div className="control">
                    <label>Email : </label>
                    <input
                        id="couriel"
                        value={couriel}
                        onChange={(e) => setCouriel(e.target.value)}
                    />
                </div>
                <div className="control">
                    <label htmlFor="password">Password : </label>
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login-button" onClick={authSubmitHandler}>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



frontend/src/components/Insriptions/Inscription.jsx [87:106]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    <div className="control">
                        <label>Email : </label>
                        <input
                            id="couriel"
                            value={couriel}
                            onChange={(e) => setCouriel(e.target.value)}
                        />
                    </div>
                    <div className="control">
                        <label htmlFor="password">Password : </label>
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>


                <button className="login-button" onClick={authSubmitHandler}>
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



