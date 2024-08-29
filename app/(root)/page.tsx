import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Belle', lastName: 'Severo', email: 'lianasevero3@gmail.com' };
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                      type="greeting"
                      title="Welcome"
                      user={loggedIn?.firstName || "Guest"}
                      subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar
              user={loggedIn}
              transactions={[]}
              banks={[{ currentBalance: 123.50 }, { currentBalance: 345.20 }]}
            />
        </section>
    )
}

export default Home