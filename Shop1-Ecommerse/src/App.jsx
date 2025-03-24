import HomePage from '@components/HomePage/HomePage';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Sidebar from '@components/Sidebar/Sidebar';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';
function App() {
    return (
        //Cung cấp dữ liệu userInfo từ storeContext cho toàn bộ ứng dụng.
        <StoreProvider>
            <ToastProvider>
                <SideBarProvider>
                    {' '}
                    {/* Quản lý trạng thái sidebar (đóng/mở, loại sidebar đang hiển thị). */}
                    <BrowserRouter>
                        <Sidebar />
                        <Suspense   >
                            <Routes>
                                {' '}
                                {/* render ra danh sách các routes*/}
                                {routers.map((item, index) => {
                                    return (
                                        <Route
                                            path={item.path}
                                            element={<item.component />}
                                            key={index}
                                        />
                                    );
                                })}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SideBarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
